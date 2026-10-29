# Allocated native memory profile diff

Allocated 1.43 GiB → 1.32 GiB (-118.557 MiB, -8.1%) over 9,003 → 8,406 samples (167 KiB → 164 KiB per sample).

| Category | Change |        Delta |      % |                Size |       Samples |
| -------- | -----: | -----------: | -----: | ------------------: | ------------: |
| Native   |  -8.1% | -118.557 MiB | 100.0% | 1.43 GiB → 1.32 GiB | 9,003 → 8,406 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 1.42 GiB → 1.31 GiB (99.4%) Compile::Compile at libjvm.dylib
    ├── 795 MiB → 735 MiB (54.2% → 54.6%) Compile::Optimize
    │   ├── … 379 MiB → 351 MiB (25.8% → 26.1%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 332 MiB → 305 MiB (22.6% → 22.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 12.8 MiB → 11.2 MiB (0.9% → 0.8%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.7 MiB → 11.9 MiB (0.8% → 0.9%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 9.29 MiB → 9.3 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 4.81 MiB → 4.92 MiB (0.3% → 0.4%) IdealLoopTree::iteration_split
    │   │   └── 3.38 MiB → 2.63 MiB (0.2%) IdealLoopTree::loop_predication
    │   ├── … 372 MiB → 344 MiB (25.4% → 25.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
    │   │   ├── … 323 MiB → 301 MiB (22.1% → 22.3%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 10.3 MiB → 10 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 11.2 MiB → 8.38 MiB (0.8% → 0.6%) malloc_hook at libasyncProfiler.dylib
    │   │   ├── 5.81 MiB → 5.87 MiB (0.4%) Arena::grow
    │   │   ├── … 5.31 MiB → 5.75 MiB (0.4%) PhaseIdealLoop::loop_predication_impl_helper at libjvm.dylib
    │   │   ├── 4.06 MiB → 3.38 MiB (0.3%) PhaseIdealLoop::split_if_with_blocks
    │   │   └── 3.25 MiB → 3.22 MiB (0.2%) IdealLoopTree::iteration_split
    │   ├── … 9.53 MiB → 7.28 MiB (0.7% → 0.5%) malloc_hook at libasyncProfiler.dylib
    │   ├── 6.29 MiB → 6.49 MiB (0.4% → 0.5%) ConnectionGraph::do_analysis
    │   ├── 6.01 MiB → 5.28 MiB (0.4%) PhaseCCP::do_transform
    │   ├── 5.71 MiB → 4.77 MiB (0.4%) PhaseRenumberLive::PhaseRenumberLive
    │   └── 4.01 MiB → 4.72 MiB (0.3% → 0.4%) PhaseMacroExpand::expand_macro_nodes
    ├── 633 MiB → 579 MiB (43.2% → 43.0%) Compile::Code_Gen
    │   ├── 528 MiB → 482 MiB (36.0% → 35.8%) PhaseChaitin::Register_Allocate
    │   │   ├── … 408 MiB → 375 MiB (27.8%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
    │   │   ├── … 110 MiB → 98.7 MiB (7.5% → 7.3%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 7.09 MiB → 4.81 MiB (0.5% → 0.4%) PhaseChaitin::Split
    │   ├── 92.4 MiB → 85.8 MiB (6.3% → 6.4%) Matcher::match
    │   │   ├── 58.1 MiB → 53.3 MiB (4.0%) Matcher::xform
    │   │   │   ├── … 41.4 MiB → 37.6 MiB (2.8%) malloc_hook at libasyncProfiler.dylib
    │   │   │   ├── … 9.25 MiB (0.6% → 0.7%) malloc_hook at libasyncProfiler.dylib
    │   │   │   └── 6.97 MiB → 6.22 MiB (0.5%) Matcher::match_tree
    │   │   ├── … 26.4 MiB → 25 MiB (1.8% → 1.9%) malloc_hook at libasyncProfiler.dylib
    │   │   └── 6.16 MiB → 5.88 MiB (0.4%) Node_Array::grow
    │   └── 6 MiB → 5.1 MiB (0.4%) PhaseCFG::do_global_code_motion
    ├── … 13.6 MiB → 12.9 MiB (0.9% → 1.0%) Parse::do_one_block at libjvm.dylib
    │   ├── 3.25 MiB → 3.81 MiB (0.2% → 0.3%) Parse::do_field_access
    │   ├── 2.97 MiB → 3.16 MiB (0.2%) Parse::do_call
    │   └── 1.13 MiB → 1.47 MiB (0.1%) Parse::return_current
    └── … 8.38 MiB → 7.88 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |   Delta |            % |         Size | Samples | Function      | Location                 |
| -----: | ------: | -----------: | -----------: | ------: | ------------- | ------------------------ |
|    new | +16 KiB | 0.0% → <0.1% | 0 B → 16 KiB |   0 → 2 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |        Delta |      % |                Size |       Samples | Function      | Location                 |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------- | ------------------------ |
|  -8.1% | -118.573 MiB | 100.0% | 1.43 GiB → 1.32 GiB | 9,003 → 8,404 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `calloc_hook` (`libasyncProfiler.dylib`)

| Change |   Delta |             % |         Size | Samples | Caller                      | Location          |
| -----: | ------: | ------------: | -----------: | ------: | --------------------------- | ----------------- |
|    new | +16 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 2 | `make_class_info_from_name` | `libverify.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |        Delta |     % |                Size |       Samples | Caller                                    | Location          |
| ------: | -----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|   -8.1% | -118.712 MiB | 99.8% | 1.43 GiB → 1.31 GiB | 8,931 → 8,330 | `os::malloc`                              | `libjvm.dylib`    |
|  +10.5% |  +268.35 KiB |  0.2% |  2.5 MiB → 2.76 MiB |            40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  -85.0% | -139.062 KiB | <0.1% |  164 KiB → 24.6 KiB |         7 → 5 | `CCalloc`                                 | `libverify.dylib` |
| +200.0% |  +13.984 KiB | <0.1% |   6.99 KiB → 21 KiB |         1 → 3 | `inflateInit2_`                           | `libzip.dylib`    |
|   -3.7% |       -769 B | <0.1% | 20.2 KiB → 19.5 KiB |       14 → 15 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |                Size | Samples | Function                                      | Location                                          |
| ------: | -------------: | -----------: | ------------------: | ------: | --------------------------------------------- | ------------------------------------------------- |
|  +40.1% |     +1.261 MiB |  0.2% → 0.3% | 3.15 MiB → 4.41 MiB | 43 → 51 | `PhaseIdealLoop::insert_post_loop`            | `libjvm.dylib`                                    |
|  +28.4% | +1,004.085 KiB |  0.2% → 0.3% | 3.46 MiB → 4.44 MiB | 48 → 51 | `PhaseIdealLoop::insert_pre_post_loops`       | `libjvm.dylib`                                    |
|  +37.6% |   +927.906 KiB |         0.2% | 2.41 MiB → 3.31 MiB | 45 → 44 | `Parse::do_put_xxx`                           | `libjvm.dylib`                                    |
| +103.7% |   +896.039 KiB |         0.1% |  864 KiB → 1.72 MiB | 14 → 24 | `Parse::do_if`                                | `libjvm.dylib`                                    |
|  +98.1% |   +852.054 KiB |         0.1% |  868 KiB → 1.68 MiB | 10 → 16 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib`                                    |
|  +77.5% |   +828.093 KiB |         0.1% | 1.04 MiB → 1.85 MiB | 13 → 19 | `PhaseIdealLoop::split_thru_phi`              | `libjvm.dylib`                                    |
| +126.3% |   +768.078 KiB | <0.1% → 0.1% |  608 KiB → 1.34 MiB | 10 → 15 | `PhaseIdealLoop::register_new_node`           | `libjvm.dylib`                                    |
|  +17.5% |   +720.171 KiB |  0.3% → 0.4% | 4.01 MiB → 4.72 MiB | 38 → 49 | `PhaseMacroExpand::expand_macro_nodes`        | `libjvm.dylib`                                    |
|  +51.3% |   +639.984 KiB |         0.1% | 1.22 MiB → 1.84 MiB | 26 → 25 | `G1BarrierSetC2::post_barrier`                | `libjvm.dylib`                                    |
|  +17.0% |   +575.921 KiB |  0.2% → 0.3% | 3.31 MiB → 3.88 MiB |      58 | `Parse::do_field_access`                      | `libjvm.dylib`                                    |
|  +51.4% |   +572.562 KiB |         0.1% | 1.09 MiB → 1.65 MiB | 16 → 26 | `ConnectionGraph::ConnectionGraph`            | `libjvm.dylib`                                    |
|   +7.9% |   +524.023 KiB |  0.4% → 0.5% |    6.49 MiB → 7 MiB | 89 → 88 | `PhaseIdealLoop::clone_loop`                  | `libjvm.dylib`                                    |
|  +69.6% |   +512.093 KiB | <0.1% → 0.1% |  736 KiB → 1.22 MiB | 17 → 23 | `PhaseAggressiveCoalesce::insert_copies`      | `libjvm.dylib`                                    |
|  +12.0% |   +480.187 KiB |         0.3% | 3.91 MiB → 4.38 MiB | 62 → 74 | `PhaseIdealLoop::create_new_if_for_predicate` | `libjvm.dylib`                                    |
|  +15.7% |   +429.272 KiB |         0.2% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader`          |
|  +15.7% |   +429.272 KiB |         0.2% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)`                  | `jdk.internal.loader.BuiltinClassLoader`          |
|  +15.7% |   +429.272 KiB |         0.2% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)`                  | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  +15.7% |   +429.272 KiB |         0.2% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String)`                           | `java.lang.ClassLoader`                           |
|  +59.1% |   +416.156 KiB | <0.1% → 0.1% |  704 KiB → 1.09 MiB | 11 → 16 | `GraphKit::null_check_common`                 | `libjvm.dylib`                                    |
| +100.0% |   +416.109 KiB | <0.1% → 0.1% |   416 KiB → 832 KiB |  9 → 11 | `GraphKit::uncommon_trap`                     | `libjvm.dylib`                                    |

##### Native

|   Change |        Delta |            % |                Size | Samples | Function                                        | Location        |
| -------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------- | --------------- |
|   +37.6% | +927.906 KiB |         0.2% | 2.41 MiB → 3.31 MiB | 45 → 44 | `Parse::do_put_xxx`                             | `libjvm.dylib`  |
|  +103.7% | +896.039 KiB |         0.1% |  864 KiB → 1.72 MiB | 14 → 24 | `Parse::do_if`                                  | `libjvm.dylib`  |
|   +51.3% | +639.984 KiB |         0.1% | 1.22 MiB → 1.84 MiB | 26 → 25 | `G1BarrierSetC2::post_barrier`                  | `libjvm.dylib`  |
|   +17.0% | +575.921 KiB |  0.2% → 0.3% | 3.31 MiB → 3.88 MiB |      58 | `Parse::do_field_access`                        | `libjvm.dylib`  |
|   +36.1% | +415.945 KiB |         0.1% | 1.13 MiB → 1.53 MiB | 12 → 11 | `Parse::return_current`                         | `libjvm.dylib`  |
|  +599.7% | +384.015 KiB |        <0.1% |    64 KiB → 448 KiB |   2 → 3 | `LibraryCallKit::inline_native_Class_query`     | `libjvm.dylib`  |
| +1199.4% | +383.992 KiB |        <0.1% |    32 KiB → 416 KiB |   1 → 3 | `Parse::catch_inline_exceptions`                | `libjvm.dylib`  |
|   +13.4% | +365.215 KiB |         0.2% | 2.67 MiB → 3.03 MiB | 71 → 66 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib` |
|   +12.1% | +351.882 KiB |         0.2% | 2.84 MiB → 3.19 MiB | 51 → 46 | `BarrierSetC2::store_at`                        | `libjvm.dylib`  |
|   +12.2% | +351.882 KiB |         0.2% | 2.81 MiB → 3.16 MiB | 50 → 45 | `ModRefBarrierSetC2::store_at_resolved`         | `libjvm.dylib`  |
|   +40.0% | +320.023 KiB |         0.1% |  800 KiB → 1.09 MiB |  7 → 11 | `PreserveJVMState::PreserveJVMState`            | `libjvm.dylib`  |
|  +899.6% | +288.015 KiB |        <0.1% |    32 KiB → 320 KiB |   1 → 2 | `LibraryCallKit::load_klass_from_mirror_common` | `libjvm.dylib`  |
|      new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `LibraryCallKit::inline_unsafe_newArray`        | `libjvm.dylib`  |
|   +63.6% |     +224 KiB |        <0.1% |   352 KiB → 576 KiB |       5 | `CountedLoopReserveKit::create_reserve`         | `libjvm.dylib`  |
|   +63.6% |     +224 KiB |        <0.1% |   352 KiB → 576 KiB |       5 | `CountedLoopReserveKit::CountedLoopReserveKit`  | `libjvm.dylib`  |
|   +63.6% |     +224 KiB |        <0.1% |   352 KiB → 576 KiB |       5 | `SuperWord::output`                             | `libjvm.dylib`  |
|  +127.8% |  +193.99 KiB |        <0.1% |   152 KiB → 346 KiB | 30 → 36 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`  |
|   +99.5% | +193.072 KiB |        <0.1% |   194 KiB → 387 KiB | 38 → 39 | `KlassFactory::create_from_stream`              | `libjvm.dylib`  |
|   +62.5% | +159.984 KiB |        <0.1% |   256 KiB → 416 KiB |   5 → 4 | `Parse::adjust_map_after_if`                    | `libjvm.dylib`  |
|      new | +128.031 KiB | 0.0% → <0.1% |       0 B → 128 KiB |   0 → 2 | `LibraryCallKit::inline_unsafe_allocate`        | `libjvm.dylib`  |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                                   | Location                  |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ------------------------- |
|  -8.1% | -118.753 MiB |         99.7% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  -8.1% | -118.753 MiB |         99.7% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Arena::grow`                              | `libjvm.dylib`            |
|  -8.1% | -118.746 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  -8.1% | -118.746 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  -8.1% | -118.746 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,818 → 8,216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `Thread::call_run`                         | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_native_entry`                      | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_start`                             | `libsystem_pthread.dylib` |
|  -8.1% | -118.712 MiB |         99.8% | 1.43 GiB → 1.31 GiB | 8,931 → 8,330 | `os::malloc`                               | `libjvm.dylib`            |
|  -8.1% | -118.573 MiB |        100.0% | 1.43 GiB → 1.32 GiB | 9,003 → 8,404 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  -8.1% | -117.828 MiB |         99.4% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `Compile::Compile`                         | `libjvm.dylib`            |
|  -8.1% | -117.828 MiB |         99.4% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  -7.5% |  -59.717 MiB | 54.2% → 54.6% |   795 MiB → 735 MiB | 4,726 → 4,426 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  -7.5% |  -56.328 MiB | 51.6% → 51.9% |   755 MiB → 699 MiB | 4,198 → 3,929 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  -7.4% |  -55.484 MiB | 51.2% → 51.6% |   751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  -7.4% |  -55.484 MiB | 51.2% → 51.6% |   751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  -8.7% |  -54.797 MiB | 43.2% → 43.0% |   633 MiB → 579 MiB | 3,651 → 3,401 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  -7.5% |  -49.312 MiB | 44.7% → 45.0% |   655 MiB → 606 MiB | 2,565 → 2,446 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  -8.8% |  -46.237 MiB | 36.0% → 35.8% |   528 MiB → 482 MiB | 2,724 → 2,541 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

##### Native

| Change |        Delta |             % |                Size |       Samples | Function                                                                           | Location                  |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------- | ------------------------- |
|  -8.1% | -118.753 MiB |         99.7% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Chunk::operator new`                                                              | `libjvm.dylib`            |
|  -8.1% | -118.753 MiB |         99.7% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Arena::grow`                                                                      | `libjvm.dylib`            |
|  -8.1% | -118.746 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `JavaThread::thread_main_inner`                                                    | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `Thread::call_run`                                                                 | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_native_entry`                                                              | `libjvm.dylib`            |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `_pthread_start`                                                                   | `libsystem_pthread.dylib` |
|  -8.1% | -118.716 MiB | 99.7% → 99.6% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_start`                                                                     | `libsystem_pthread.dylib` |
|  -8.1% | -118.712 MiB |         99.8% | 1.43 GiB → 1.31 GiB | 8,931 → 8,330 | `os::malloc`                                                                       | `libjvm.dylib`            |
|  -8.1% | -118.573 MiB |        100.0% | 1.43 GiB → 1.32 GiB | 9,003 → 8,404 | `malloc_hook`                                                                      | `libasyncProfiler.dylib`  |
|  -6.0% |   -7.502 MiB |   8.6% → 8.8% |   126 MiB → 118 MiB | 1,726 → 1,597 | `Arena::Arealloc`                                                                  | `libjvm.dylib`            |
| -18.5% |   -4.438 MiB |   1.6% → 1.5% |   24 MiB → 19.6 MiB |     374 → 315 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                 | `libjvm.dylib`            |
| -19.0% |    -2.75 MiB |   1.0% → 0.9% | 14.5 MiB → 11.7 MiB |     183 → 168 | `PredictedCallGenerator::generate`                                                 | `libjvm.dylib`            |
| -12.6% |   -2.157 MiB |   1.2% → 1.1% |   17.2 MiB → 15 MiB |     225 → 203 | `Parse::do_call`                                                                   | `libjvm.dylib`            |
| -11.4% |   -2.094 MiB |   1.3% → 1.2% | 18.4 MiB → 16.3 MiB |     247 → 218 | `Parse::do_all_blocks`                                                             | `libjvm.dylib`            |
| -11.4% |   -2.094 MiB |   1.3% → 1.2% | 18.4 MiB → 16.3 MiB |     247 → 218 | `Parse::Parse`                                                                     | `libjvm.dylib`            |
| -11.4% |   -2.094 MiB |   1.3% → 1.2% | 18.4 MiB → 16.3 MiB |     247 → 218 | `ParseGenerator::generate`                                                         | `libjvm.dylib`            |
| -10.8% |   -1.969 MiB |          1.2% | 18.2 MiB → 16.2 MiB |     245 → 217 | `Parse::do_one_block`                                                              | `libjvm.dylib`            |
| -43.9% |   -1.125 MiB |   0.2% → 0.1% | 2.56 MiB → 1.44 MiB |       47 → 30 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib`            |
| -22.9% | -908.183 KiB |   0.3% → 0.2% | 3.87 MiB → 2.99 MiB |       95 → 89 | `Compiler::compile_method`                                                         | `libjvm.dylib`            |
| -36.0% | -864.171 KiB |   0.2% → 0.1% |  2.34 MiB → 1.5 MiB |       22 → 16 | `Parse::build_exits`                                                               | `libjvm.dylib`            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::insert_post_loop` (`libjvm.dylib`)

| Change |       Delta |             % |                Size | Samples | Caller                                    | Location       |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------- | -------------- |
| +39.9% |   +1.23 MiB | 98.0% → 97.9% | 3.08 MiB → 4.31 MiB | 42 → 49 | `PhaseIdealLoop::insert_pre_post_loops`   | `libjvm.dylib` |
| +50.0% | +32.015 KiB |   2.0% → 2.1% |     64 KiB → 96 KiB |   1 → 2 | `PhaseIdealLoop::insert_vector_post_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_pre_post_loops` (`libjvm.dylib`)

| Change |          Delta |      % |                Size | Samples | Caller                                | Location       |
| -----: | -------------: | -----: | ------------------: | ------: | ------------------------------------- | -------------- |
| +28.4% | +1,004.085 KiB | 100.0% | 3.46 MiB → 4.44 MiB | 48 → 51 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `Parse::do_put_xxx` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------ | -------------- |
| +37.6% | +927.906 KiB | 100.0% | 2.41 MiB → 3.31 MiB | 45 → 44 | `Parse::do_field_access` | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

|  Change |        Delta |      % |               Size | Samples | Caller                | Location       |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| +103.7% | +896.039 KiB | 100.0% | 864 KiB → 1.72 MiB | 14 → 24 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                                 | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------------- | -------------- |
| +98.1% | +852.054 KiB | 100.0% | 868 KiB → 1.68 MiB | 10 → 16 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_thru_phi` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Caller                                      | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------- | -------------- |
| +111.0% | +888.093 KiB | 74.9% → 89.0% | 800 KiB → 1.65 MiB |  9 → 15 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
|  -22.4% |      -60 KiB | 25.1% → 11.0% |  268 KiB → 208 KiB |       4 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseIdealLoop::register_new_node` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                                                          | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | --------------------------------------------------------------- | -------------- |
| +222.2% | +640.078 KiB | 47.4% → 67.4% | 288 KiB → 928 KiB |   3 → 8 | `PhaseIdealLoop::split_thru_phi`                                | `libjvm.dylib` |
| removed | -128.046 KiB |  21.1% → 0.0% |     128 KiB → 0 B |   3 → 0 | `PhaseIdealLoop::clone_assertion_predicate_and_initialize`      | `libjvm.dylib` |
| +399.9% | +128.015 KiB |  5.3% → 11.6% |  32 KiB → 160 KiB |   1 → 2 | `PhaseIdealLoop::rc_predicate`                                  | `libjvm.dylib` |
| +100.0% |  +64.015 KiB |  10.5% → 9.3% |  64 KiB → 128 KiB |   1 → 2 | `PhaseIdealLoop::create_bool_from_template_assertion_predicate` | `libjvm.dylib` |
| removed |  -64.015 KiB |  10.5% → 0.0% |      64 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::insert_pre_post_loops`                         | `libjvm.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | -------------- |
| +17.5% | +720.171 KiB | 100.0% | 4.01 MiB → 4.72 MiB | 38 → 49 | `Compile::Optimize` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------- | -------------- |
| +51.3% | +639.984 KiB | 100.0% | 1.22 MiB → 1.84 MiB | 26 → 25 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | -------------- |
| +17.0% | +575.921 KiB | 100.0% | 3.31 MiB → 3.88 MiB |      58 | `Parse::do_one_block` | `libjvm.dylib` |

##### `ConnectionGraph::ConnectionGraph` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                         | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | -------------- |
| +51.4% | +572.562 KiB | 100.0% | 1.09 MiB → 1.65 MiB | 16 → 26 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::clone_loop` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Caller                                        | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------- | -------------- |
|  +40.1% |   +1.261 MiB | 48.5% → 62.9% | 3.15 MiB → 4.41 MiB | 43 → 51 | `PhaseIdealLoop::insert_post_loop`            | `libjvm.dylib` |
|  -35.5% | -352.031 KiB |  14.9% → 8.9% |   992 KiB → 640 KiB | 13 → 11 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |
| removed | -224.046 KiB |   3.4% → 0.0% |       224 KiB → 0 B |   3 → 0 | `PhaseIdealLoop::insert_pre_post_loops`       | `libjvm.dylib` |
|  -66.7% | -128.046 KiB |   2.9% → 0.9% |    192 KiB → 64 KiB |   4 → 1 | `PhaseIdealLoop::do_peeling`                  | `libjvm.dylib` |
| removed | -128.015 KiB |   1.9% → 0.0% |       128 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::partial_peel`                | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                            | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------- | -------------- |
| +69.6% | +512.093 KiB | 100.0% | 736 KiB → 1.22 MiB | 17 → 23 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::create_new_if_for_predicate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                                                     | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------- | -------------- |
| +20.6% |  +704.25 KiB | 85.6% → 92.1% | 3.34 MiB → 4.03 MiB | 49 → 65 | `PhaseIdealLoop::loop_predication_impl_helper`             | `libjvm.dylib` |
| -37.5% | -192.062 KiB |  12.8% → 7.1% |   512 KiB → 320 KiB |  12 → 8 | `PhaseIdealLoop::insert_loop_limit_check_predicate`        | `libjvm.dylib` |
| -50.0% |      -32 KiB |   1.6% → 0.7% |     64 KiB → 32 KiB |       1 | `PhaseIdealLoop::clone_parse_predicate_to_unswitched_loop` | `libjvm.dylib` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |        Delta |      % |                Size | Samples | Caller                       | Location                                 |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ---------------------------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |
| -56.5% |       -104 B |  <0.1% |        184 B → 80 B |   3 → 1 | `loadClassOrNull(String)`    | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |        Delta |      % |                Size | Samples | Caller                       | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ------------------------------------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ----------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |                Size | Samples | Caller                                                                          | Location                                                             |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  +80.9% | +246.548 KiB | 11.2% → 17.4% |   305 KiB → 551 KiB |  10 → 8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                              |
|     new |  +99.141 KiB |   0.0% → 3.1% |      0 B → 99.1 KiB |   0 → 1 | `<init>(int, boolean)`                                                          | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`        |
|  +30.7% |  +73.721 KiB |   8.8% → 9.9% |   240 KiB → 314 KiB |   3 → 2 | `lambda$createPlugin$0()`                                                       | `org.codehaus.groovy.vmplugin.VMPluginFactory`                       |
| +137.3% |  +62.702 KiB |   1.7% → 3.4% |  45.7 KiB → 108 KiB |       7 | `invokeVirtual(Object, Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH`                                    |
| +642.7% |  +56.654 KiB |   0.3% → 2.1% | 8.81 KiB → 65.5 KiB |       1 | `loadDgmInfo()`                                                                 | `org.codehaus.groovy.reflection.GeneratedMetaMethod$DgmMethodRecord` |

##### `GraphKit::null_check_common` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                                      | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------- | -------------- |
|     new | +256.015 KiB |  0.0% → 22.9% |     0 B → 256 KiB |   0 → 1 | `LibraryCallKit::inline_native_Class_query` | `libjvm.dylib` |
| +500.6% |  +160.07 KiB |  4.5% → 17.1% |  32 KiB → 192 KiB |   1 → 3 | `Parse::array_addressing`                   | `libjvm.dylib` |
|  +71.4% | +160.062 KiB | 31.8% → 34.3% | 224 KiB → 384 KiB |   3 → 7 | `PredictedCallGenerator::generate`          | `libjvm.dylib` |
|  -50.0% | -127.992 KiB | 36.4% → 11.4% | 256 KiB → 128 KiB |   4 → 2 | `Parse::do_one_bytecode`                    | `libjvm.dylib` |
| removed |  -64.015 KiB |   9.1% → 0.0% |      64 KiB → 0 B |   1 → 0 | `GraphKit::null_check_oop`                  | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                          | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------- | -------------- |
| +275.1% | +352.101 KiB | 30.8% → 57.7% | 128 KiB → 480 KiB |   3 → 7 | `GraphKit::null_check_common`   | `libjvm.dylib` |
| +700.6% | +224.039 KiB |  7.7% → 30.8% |  32 KiB → 256 KiB |       1 | `Parse::adjust_map_after_if`    | `libjvm.dylib` |
| removed |  -96.031 KiB |  23.1% → 0.0% |      96 KiB → 0 B |   2 → 0 | `Parse::array_addressing`       | `libjvm.dylib` |
| removed |  -64.015 KiB |  15.4% → 0.0% |      64 KiB → 0 B |   1 → 0 | `GraphKit::add_parse_predicate` | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 3.8% |      0 B → 32 KiB |   0 → 1 | `Parse::do_all_blocks`          | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | -------------- |
| +36.1% | +415.945 KiB | 100.0% | 1.13 MiB → 1.53 MiB | 12 → 11 | `Parse::do_one_block` | `libjvm.dylib` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                       | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ---------------------------- | -------------- |
| +599.7% | +384.015 KiB | 100.0% | 64 KiB → 448 KiB |   2 → 3 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller                 | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ---------------------- | -------------- |
| +1199.4% | +383.992 KiB | 100.0% | 32 KiB → 416 KiB |   1 → 3 | `Parse::do_exceptions` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                                                          | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +13.4% | +365.215 KiB | 100.0% | 2.67 MiB → 3.03 MiB | 71 → 66 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `BarrierSetC2::store_at` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                      | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------- | -------------- |
| +12.1% | +351.882 KiB | 100.0% | 2.84 MiB → 3.19 MiB | 51 → 46 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `ModRefBarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------ | -------------- |
| +12.2% | +351.882 KiB | 100.0% | 2.81 MiB → 3.16 MiB | 50 → 45 | `BarrierSetC2::store_at` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Caller                             | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ---------------------------------- | -------------- |
| +312.5% |  +800.07 KiB | 32.0% → 94.3% | 256 KiB → 1.03 MiB |  3 → 10 | `Parse::do_if`                     | `libjvm.dylib` |
| removed | -384.031 KiB |  48.0% → 0.0% |      384 KiB → 0 B |   2 → 0 | `LibraryCallKit::inline_arraycopy` | `libjvm.dylib` |
| removed | -128.015 KiB |  16.0% → 0.0% |      128 KiB → 0 B |   1 → 0 | `Parse::array_addressing`          | `libjvm.dylib` |
|     new |  +64.015 KiB |   0.0% → 5.7% |       0 B → 64 KiB |   0 → 1 | `Parse::do_ifnull`                 | `libjvm.dylib` |
| removed |  -32.015 KiB |   4.0% → 0.0% |       32 KiB → 0 B |   1 → 0 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `LibraryCallKit::load_klass_from_mirror_common` (`libjvm.dylib`)

|  Change |        Delta |              % |            Size | Samples | Caller                                      | Location       |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------------------------- | -------------- |
|     new | +256.015 KiB |   0.0% → 80.0% |   0 B → 256 KiB |   0 → 1 | `LibraryCallKit::inline_unsafe_newArray`    | `libjvm.dylib` |
| +100.0% |      +32 KiB | 100.0% → 20.0% | 32 KiB → 64 KiB |       1 | `LibraryCallKit::inline_native_Class_query` | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_newArray` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | -------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `LibraryCallKit::try_to_inline` | `libjvm.dylib` |

##### `CountedLoopReserveKit::create_reserve` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Caller                                         | Location       |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------------------------- | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `CountedLoopReserveKit::CountedLoopReserveKit` | `libjvm.dylib` |

##### `CountedLoopReserveKit::CountedLoopReserveKit` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Caller              | Location       |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `SuperWord::output` | `libjvm.dylib` |

##### `SuperWord::output` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Caller                      | Location       |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `SuperWord::transform_loop` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|  Change |       Delta |      % |              Size | Samples | Caller                             | Location       |
| ------: | ----------: | -----: | ----------------: | ------: | ---------------------------------- | -------------- |
| +127.8% | +193.99 KiB | 100.0% | 152 KiB → 346 KiB | 30 → 36 | `KlassFactory::create_from_stream` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|  Change |       Delta |             % |               Size | Samples | Caller                                               | Location       |
| ------: | ----------: | ------------: | -----------------: | ------: | ---------------------------------------------------- | -------------- |
|  +55.6% | +96.966 KiB | 89.9% → 70.1% |  174 KiB → 271 KiB | 29 → 26 | `SystemDictionary::resolve_class_from_stream`        | `libjvm.dylib` |
| +492.6% | +96.105 KiB | 10.1% → 29.9% | 19.5 KiB → 116 KiB |  9 → 13 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change |       Delta |             % |             Size | Samples | Caller             | Location       |
| ------: | ----------: | ------------: | ---------------: | ------: | ------------------ | -------------- |
| +233.3% |    +224 KiB | 37.5% → 76.9% | 96 KiB → 320 KiB |       2 | `Parse::do_ifnull` | `libjvm.dylib` |
|  -40.0% | -64.015 KiB | 62.5% → 23.1% | 160 KiB → 96 KiB |   3 → 2 | `Parse::do_if`     | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_allocate` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | -------------- |
|    new | +128.031 KiB | 0.0% → 100.0% | 0 B → 128 KiB |   0 → 2 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller        | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------- | -------------- |
|  -8.1% | -118.753 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |             % |               Size |       Samples | Caller                                                             | Location       |
| -----: | ----------: | ------------: | -----------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|  -7.5% | -49.312 MiB | 44.8% → 45.1% |  655 MiB → 606 MiB | 2,565 → 2,446 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  -8.1% | -32.867 MiB |         27.9% |  408 MiB → 375 MiB | 1,726 → 1,658 | `PhaseIFG::init`                                                   | `libjvm.dylib` |
| -10.0% | -11.005 MiB |   7.5% → 7.4% | 110 MiB → 98.7 MiB |     827 → 751 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  -6.0% |  -7.502 MiB |   8.6% → 8.8% |  126 MiB → 118 MiB | 1,726 → 1,597 | `Arena::Arealloc`                                                  | `libjvm.dylib` |
| -18.5% |  -4.438 MiB |   1.6% → 1.5% |  24 MiB → 19.6 MiB |     374 → 315 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller                          | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------------- | -------------- |
|  -8.1% | -118.746 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller             | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  -8.1% | -118.746 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller                                | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------------------- | -------------- |
|  -8.1% | -118.746 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,818 → 8,216 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller                | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller           | Location                  |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------- | ------------------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller         | Location                  |
| -----: | -----------: | -----: | ------------------: | ------------: | -------------- | ------------------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_start` | `libsystem_pthread.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |        Delta |            % |                Size |       Samples | Caller                      | Location       |
| -----: | -----------: | -----------: | ------------------: | ------------: | --------------------------- | -------------- |
|  -8.1% | -118.753 MiB |        99.9% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Chunk::operator new`       | `libjvm.dylib` |
| +23.1% |  +49.503 KiB |        <0.1% |   214 KiB → 263 KiB |     100 → 109 | `AllocateHeap`              | `libjvm.dylib` |
| -94.6% |    -8.14 KiB |        <0.1% |    8.61 KiB → 480 B |         8 → 6 | `AnyObj::operator new`      | `libjvm.dylib` |
|    ~0% |       +192 B |         0.1% |             914 KiB |         1 → 2 | `os::malloc`                | `libjvm.dylib` |
|    new |       +192 B | 0.0% → <0.1% |         0 B → 192 B |         0 → 1 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |        Delta |     % |                Size |       Samples | Caller                                    | Location          |
| ------: | -----------: | ----: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|   -8.1% | -118.712 MiB | 99.8% | 1.43 GiB → 1.31 GiB | 8,931 → 8,330 | `os::malloc`                              | `libjvm.dylib`    |
|  +10.5% |  +268.35 KiB |  0.2% |  2.5 MiB → 2.76 MiB |            40 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  -85.0% | -139.062 KiB | <0.1% |  164 KiB → 24.6 KiB |         7 → 5 | `CCalloc`                                 | `libverify.dylib` |
| +200.0% |  +13.984 KiB | <0.1% |   6.99 KiB → 21 KiB |         1 → 3 | `inflateInit2_`                           | `libzip.dylib`    |
|   -3.7% |       -769 B | <0.1% | 20.2 KiB → 19.5 KiB |       14 → 15 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib`   |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller                       | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------- | -------------- |
|  -8.1% | -117.828 MiB | 100.0% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|  -8.1% | -117.828 MiB | 100.0% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -7.5% | -59.717 MiB | 100.0% | 795 MiB → 735 MiB | 4,726 → 4,426 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |       Delta |     % |              Size |       Samples | Caller                    | Location       |
| -----: | ----------: | ----: | ----------------: | ------------: | ------------------------- | -------------- |
|  -7.6% | -28.422 MiB | 49.7% | 376 MiB → 347 MiB | 2,269 → 2,130 | `Compile::Optimize`       | `libjvm.dylib` |
|  -7.3% | -27.905 MiB | 50.3% | 380 MiB → 352 MiB | 1,929 → 1,799 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
|  -7.4% | -55.484 MiB | 100.0% | 751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  -7.4% | -55.484 MiB | 100.0% | 751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -8.7% | -54.797 MiB | 100.0% | 633 MiB → 579 MiB | 3,651 → 3,401 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -7.5% | -49.312 MiB | 100.0% | 655 MiB → 606 MiB | 2,565 → 2,446 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  -8.8% | -46.237 MiB | 100.0% | 528 MiB → 482 MiB | 2,724 → 2,541 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |     Samples | Caller                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ----------: | -------------------------------------- | -------------- |
|  -6.5% |   -4.657 MiB | 57.1% → 56.7% | 71.9 MiB → 67.2 MiB | 1,042 → 960 | `Node_Array::grow`                     | `libjvm.dylib` |
| -31.6% |  -768.25 KiB |   1.9% → 1.4% | 2.38 MiB → 1.63 MiB |     44 → 28 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
| -13.2% | -736.125 KiB |   4.3% → 4.0% | 5.44 MiB → 4.72 MiB |     57 → 49 | `PhaseGVN::transform_no_reclaim`       | `libjvm.dylib` |
| -37.5% | -480.125 KiB |   1.0% → 0.7% |  1.25 MiB → 800 KiB |     29 → 21 | `Dict::doubhash`                       | `libjvm.dylib` |
|  -7.1% |  -319.89 KiB |   3.5% → 3.4% | 4.38 MiB → 4.06 MiB |     36 → 43 | `Block_Array::grow`                    | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |       Delta |              % |              Size |   Samples | Caller                                               | Location       |
| -----: | ----------: | -------------: | ----------------: | --------: | ---------------------------------------------------- | -------------- |
| -18.7% |    -4.5 MiB | 100.0% → 99.7% | 24 MiB → 19.5 MiB | 374 → 314 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|    new | +64.015 KiB |    0.0% → 0.3% |      0 B → 64 KiB |     0 → 1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
| -19.0% |    -2.75 MiB |        100.0% | 14.5 MiB → 11.7 MiB | 183 → 168 | `Parse::do_call`                       | `libjvm.dylib` |
| -21.1% |   -1.125 MiB | 36.9% → 36.0% | 5.34 MiB → 4.22 MiB |   57 → 50 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| -33.4% | -128.156 KiB |   2.6% → 2.1% |   384 KiB → 256 KiB |     2 → 7 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |   Samples | Caller                | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------- | -------------- |
| -12.6% | -2.157 MiB | 100.0% | 17.2 MiB → 15 MiB | 225 → 203 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
| -11.4% | -2.094 MiB | 100.0% | 18.4 MiB → 16.3 MiB | 247 → 218 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| -11.4% | -2.094 MiB | 100.0% | 18.4 MiB → 16.3 MiB | 247 → 218 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
|  -18.5% |   -2.625 MiB | 77.4% → 71.2% | 14.2 MiB → 11.6 MiB | 177 → 165 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  -11.8% |   -2.125 MiB | 97.6% → 97.1% | 17.9 MiB → 15.8 MiB | 244 → 207 | `Compile::Compile`                     | `libjvm.dylib` |
|  -10.0% |   -1.375 MiB | 74.8% → 76.0% | 13.8 MiB → 12.4 MiB | 168 → 150 | `Parse::do_call`                       | `libjvm.dylib` |
| +250.0% | +160.046 KiB |   0.3% → 1.3% |    64 KiB → 224 KiB |     1 → 4 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                 | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- | -------------- |
| -10.8% | -1.969 MiB | 100.0% | 18.2 MiB → 16.2 MiB | 245 → 217 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

|  Change |       Delta |             % |               Size | Samples | Caller                                   | Location       |
| ------: | ----------: | ------------: | -----------------: | ------: | ---------------------------------------- | -------------- |
|  -61.0% | -800.14 KiB | 50.0% → 34.8% | 1.28 MiB → 512 KiB | 19 → 10 | `PhaseChaitin::new_lrg`                  | `libjvm.dylib` |
|  -48.0% | -384.14 KiB | 30.5% → 28.3% |  800 KiB → 416 KiB |  18 → 9 | `PhaseCFG::partial_latency_of_defs`      | `libjvm.dylib` |
|  +21.4% | +96.031 KiB | 17.1% → 37.0% |  448 KiB → 544 KiB |  9 → 11 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| removed | -64.015 KiB |   2.4% → 0.0% |       64 KiB → 0 B |   1 → 0 | `PhaseCFG::latency_from_uses`            | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------ | -------------- |
| -22.9% | -908.183 KiB | 100.0% | 3.87 MiB → 2.99 MiB | 95 → 89 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller         | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------- | -------------- |
| -36.0% | -864.171 KiB | 100.0% | 2.34 MiB → 1.5 MiB | 22 → 16 | `Parse::Parse` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::insert_post_loop` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Callee                       | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------- | -------------- |
| +40.1% | +1.261 MiB | 100.0% | 3.15 MiB → 4.41 MiB | 43 → 51 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_pre_post_loops` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------- | -------------- |
|  +39.9% |    +1.23 MiB | 89.2% → 97.2% | 3.08 MiB → 4.31 MiB | 42 → 49 | `PhaseIdealLoop::insert_post_loop`                       | `libjvm.dylib` |
| removed | -224.046 KiB |   6.3% → 0.0% |       224 KiB → 0 B |   3 → 0 | `PhaseIdealLoop::clone_loop`                             | `libjvm.dylib` |
| removed |  -64.015 KiB |   1.8% → 0.0% |        64 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::register_new_node`                      | `libjvm.dylib` |
| +100.0% |      +32 KiB |   0.9% → 1.4% |     32 KiB → 64 KiB |       1 | `PhaseIdealLoop::copy_assertion_predicates_to_post_loop` | `libjvm.dylib` |

##### `Parse::do_put_xxx` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------- | -------------- |
|  +32.4% | +767.921 KiB | 96.1% → 92.5% | 2.31 MiB → 3.06 MiB |      42 | `GraphKit::access_store_at`      | `libjvm.dylib` |
| +299.9% |     +192 KiB |   2.6% → 7.5% |    64 KiB → 256 KiB |       2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed |  -32.015 KiB |   1.3% → 0.0% |        32 KiB → 0 B |   1 → 0 | `GraphKit::basic_plus_adr`       | `libjvm.dylib` |

##### `Parse::do_if` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------ | -------------- |
| +312.5% |  +800.07 KiB | 29.6% → 60.0% | 256 KiB → 1.03 MiB |  3 → 10 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|     new | +159.992 KiB |   0.0% → 9.1% |      0 B → 160 KiB |   0 → 2 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
|  -40.0% |  -64.015 KiB |  18.5% → 5.5% |   160 KiB → 96 KiB |   3 → 2 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |
|  +25.0% |  +32.015 KiB |  14.8% → 9.1% |  128 KiB → 160 KiB |   2 → 3 | `Parse::merge_common`                | `libjvm.dylib` |
| removed |  -32.015 KiB |   3.7% → 0.0% |       32 KiB → 0 B |   1 → 0 | `BoolNode::negate`                   | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------------- | -------------- |
| +111.0% | +888.093 KiB | 92.2% → 98.1% | 800 KiB → 1.65 MiB |  9 → 15 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |
|  -53.0% |  -36.039 KiB |   7.8% → 1.9% |    68 KiB → 32 KiB |       1 | `PhaseIterGVN::subsume_node`     | `libjvm.dylib` |

##### `PhaseIdealLoop::split_thru_phi` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                              | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------- | -------------- |
| +222.2% | +640.078 KiB | 27.0% → 48.9% | 288 KiB → 928 KiB |   3 → 8 | `PhaseIdealLoop::register_new_node` | `libjvm.dylib` |
| +121.0% |  +92.015 KiB |   7.1% → 8.9% |  76 KiB → 168 KiB |   2 → 3 | `Node::clone`                       | `libjvm.dylib` |
|  +10.0% |  +63.984 KiB | 59.9% → 37.1% | 640 KiB → 704 KiB |   7 → 6 | `Type_Array::grow`                  | `libjvm.dylib` |
|  +50.0% |  +32.015 KiB |   6.0% → 5.1% |   64 KiB → 96 KiB |   1 → 2 | `Node_Array::grow`                  | `libjvm.dylib` |

##### `PhaseIdealLoop::register_new_node` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                                           | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------------ | -------------- |
| +140.0% | +672.078 KiB | 78.9% → 83.7% | 480 KiB → 1.13 MiB |  7 → 12 | `Node_Array::grow`                               | `libjvm.dylib` |
|  +75.0% |      +96 KiB | 21.1% → 16.3% |  128 KiB → 224 KiB |       3 | `PhaseIterGVN::register_new_node_with_optimizer` | `libjvm.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                       | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------- | -------------- |
| +19.1% | +416.093 KiB | 53.0% → 53.7% | 2.13 MiB → 2.53 MiB | 20 → 26 | `PhaseIterGVN::optimize`                     | `libjvm.dylib` |
|    new | +256.015 KiB |   0.0% → 5.3% |       0 B → 256 KiB |   0 → 1 | `PhaseMacroExpand::expand_unlock_node`       | `libjvm.dylib` |
| -46.7% | -224.062 KiB |  11.7% → 5.3% |   480 KiB → 256 KiB |   5 → 1 | `PhaseMacroExpand::expand_arraycopy_node`    | `libjvm.dylib` |
| +18.1% | +176.046 KiB | 23.7% → 23.8% |  972 KiB → 1.12 MiB |  8 → 11 | `PhaseMacroExpand::expand_allocate_common`   | `libjvm.dylib` |
| +20.0% |  +96.078 KiB | 11.7% → 11.9% |   480 KiB → 576 KiB |  5 → 10 | `PhaseMacroExpand::expand_subtypecheck_node` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  +75.0% | +287.945 KiB | 30.8% → 35.6% | 384 KiB → 672 KiB |   8 → 7 | `IdealKit::if_then`              | `libjvm.dylib` |
| +299.8% | +191.984 KiB |  5.1% → 13.6% |  64 KiB → 256 KiB |   2 → 1 | `IdealKit::transform`            | `libjvm.dylib` |
|     new | +128.015 KiB |   0.0% → 6.8% |     0 B → 128 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new | +128.015 KiB |   0.0% → 6.8% |     0 B → 128 KiB |   0 → 1 | `Node::Node`                     | `libjvm.dylib` |
|  +42.9% |   +96.07 KiB | 17.9% → 17.0% | 224 KiB → 320 KiB |   5 → 7 | `IdealKit::end_if`               | `libjvm.dylib` |

##### `Parse::do_field_access` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------- | -------------- |
|  +37.6% | +927.906 KiB | 72.6% → 85.5% | 2.41 MiB → 3.31 MiB | 45 → 44 | `Parse::do_put_xxx`             | `libjvm.dylib` |
|  -28.6% | -191.968 KiB | 19.8% → 12.1% |   672 KiB → 480 KiB | 10 → 12 | `Parse::do_get_xxx`             | `libjvm.dylib` |
| removed | -128.015 KiB |   3.8% → 0.0% |       128 KiB → 0 B |   1 → 0 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |
|  -25.0% |      -32 KiB |   3.8% → 2.4% |    128 KiB → 96 KiB |       2 | `GraphKit::null_check_common`   | `libjvm.dylib` |

##### `ConnectionGraph::ConnectionGraph` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- | -------------- |
| +51.4% | +572.562 KiB | 100.0% | 1.09 MiB → 1.65 MiB | 16 → 26 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseIdealLoop::clone_loop` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                        | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------- | -------------- |
|  +44.0% | +352.085 KiB | 12.0% → 16.1% |  800 KiB → 1.13 MiB | 10 → 13 | `PhaseIdealLoop::fix_ctrl_uses`               | `libjvm.dylib` |
|  +14.3% | +352.031 KiB | 37.1% → 39.3% | 2.41 MiB → 2.75 MiB | 36 → 38 | `PhaseIdealLoop::fix_body_edges`              | `libjvm.dylib` |
|   -5.4% | -160.078 KiB | 44.3% → 38.8% | 2.88 MiB → 2.72 MiB | 37 → 32 | `Node_Array::grow`                            | `libjvm.dylib` |
|     new | +160.031 KiB |   0.0% → 2.2% |       0 B → 160 KiB |   0 → 2 | `PhaseIdealLoop::clone_loop_handle_data_uses` | `libjvm.dylib` |
| removed |  -84.031 KiB |   1.3% → 0.0% |        84 KiB → 0 B |   2 → 0 | `Node::clone`                                 | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                                                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
| +649.8% | +416.078 KiB |  8.7% → 38.5% |  64 KiB → 480 KiB |   2 → 7 | `Block_Array::grow`                                                                | `libjvm.dylib` |
|  +21.4% |  +96.031 KiB | 60.9% → 43.6% | 448 KiB → 544 KiB |  9 → 11 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` | `libjvm.dylib` |
|     ~0% |        -16 B | 30.4% → 17.9% |           224 KiB |   6 → 5 | `PhaseChaitin::new_lrg`                                                            | `libjvm.dylib` |

##### `PhaseIdealLoop::create_new_if_for_predicate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                             | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------- | -------------- |
|   +9.8% | +384.171 KiB | 98.4% → 96.4% | 3.84 MiB → 4.22 MiB | 61 → 72 | `PhaseIdealLoop::set_idom`         | `libjvm.dylib` |
| +150.0% |  +96.015 KiB |   1.6% → 3.6% |    64 KiB → 160 KiB |   1 → 2 | `PhaseIdealLoop::register_control` | `libjvm.dylib` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|    Change |        Delta |              % |                Size | Samples | Callee                               | Location                                 |
| --------: | -----------: | -------------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------- |
|    +13.3% | +363.827 KiB | 100.0% → 97.9% | 2.67 MiB → 3.02 MiB | 71 → 65 | `findClassOnClassPathOrNull(String)` | `jdk.internal.loader.BuiltinClassLoader` |
| +23565.5% |  +65.357 KiB |   <0.1% → 2.1% |    284 B → 65.6 KiB |   4 → 3 | `loadClassOrNull(String)`            | `jdk.internal.loader.BuiltinClassLoader` |
|       new |        +90 B |   0.0% → <0.1% |          0 B → 90 B |   0 → 1 | `findLoadedClass(String)`            | `java.lang.ClassLoader`                  |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |        Delta |      % |                Size | Samples | Callee                             | Location                                 |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------------- | ---------------------------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |        Delta |      % |                Size | Samples | Callee                       | Location                                 |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ---------------------------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |        Delta |      % |                Size | Samples | Callee                       | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ------------------------------------------------- |
| +15.7% | +429.272 KiB | 100.0% | 2.67 MiB → 3.09 MiB | 75 → 69 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `GraphKit::null_check_common` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
| +275.1% | +352.101 KiB | 18.2% → 42.9% | 128 KiB → 480 KiB |   3 → 7 | `GraphKit::uncommon_trap`        | `libjvm.dylib` |
| +299.9% |     +192 KiB |  9.1% → 22.9% |  64 KiB → 256 KiB |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  -50.0% |      -96 KiB |  27.3% → 8.6% |  192 KiB → 96 KiB |       2 | `GraphKit::cast_not_null`        | `libjvm.dylib` |
|  -30.0% |   -95.96 KiB | 45.5% → 20.0% | 320 KiB → 224 KiB |       5 | `BuildCutout::BuildCutout`       | `libjvm.dylib` |
|     new |  +64.015 KiB |   0.0% → 5.7% |      0 B → 64 KiB |   0 → 1 | `TypePtr::xmeet`                 | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------ | -------------- |
|  +77.8% | +224.054 KiB | 69.2% → 61.5% | 288 KiB → 512 KiB |   6 → 7 | `GraphKit::make_runtime_call`  | `libjvm.dylib` |
| +166.6% | +160.015 KiB | 23.1% → 30.8% |  96 KiB → 256 KiB |   2 → 3 | `Type_Array::grow`             | `libjvm.dylib` |
|     new |  +64.015 KiB |   0.0% → 7.7% |      0 B → 64 KiB |   0 → 1 | `HaltNode::HaltNode`           | `libjvm.dylib` |
| removed |  -31.976 KiB |   7.7% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Compile::too_many_recompiles` | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------------- | -------------- |
|  +48.0% | +383.968 KiB | 69.4% → 75.5% | 800 KiB → 1.16 MiB |   8 → 6 | `Type_Array::grow`               | `libjvm.dylib` |
| +100.0% | +128.007 KiB | 11.1% → 16.3% |  128 KiB → 256 KiB |   1 → 4 | `Parse::call_register_finalizer` | `libjvm.dylib` |
|  -42.9% |  -96.031 KiB |  19.4% → 8.2% |  224 KiB → 128 KiB |   3 → 1 | `PhiNode::slice_memory`          | `libjvm.dylib` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

|  Change |        Delta |             % |            Size | Samples | Callee                                          | Location       |
| ------: | -----------: | ------------: | --------------: | ------: | ----------------------------------------------- | -------------- |
|     new | +256.015 KiB |  0.0% → 57.1% |   0 B → 256 KiB |   0 → 1 | `GraphKit::null_check_common`                   | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 28.6% |   0 B → 128 KiB |   0 → 1 | `Node::Node`                                    | `libjvm.dylib` |
| removed |  -32.015 KiB |  50.0% → 0.0% |    32 KiB → 0 B |   1 → 0 | `GraphKit::gen_instanceof`                      | `libjvm.dylib` |
| +100.0% |      +32 KiB | 50.0% → 14.3% | 32 KiB → 64 KiB |       1 | `LibraryCallKit::load_klass_from_mirror_common` | `libjvm.dylib` |

##### `Parse::catch_inline_exceptions` (`libjvm.dylib`)

|   Change |        Delta |              % |             Size | Samples | Callee                 | Location       |
| -------: | -----------: | -------------: | ---------------: | ------: | ---------------------- | -------------- |
| +1099.5% | +352.015 KiB | 100.0% → 92.3% | 32 KiB → 384 KiB |   1 → 2 | `Parse::throw_to_exit` | `libjvm.dylib` |
|      new |  +31.976 KiB |    0.0% → 7.7% |     0 B → 32 KiB |   0 → 1 | `LoadKlassNode::make`  | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |       Delta |             % |               Size | Samples | Callee                      | Location                 |
| -----: | ----------: | ------------: | -----------------: | ------: | --------------------------- | ------------------------ |
| +10.5% | +268.35 KiB | 93.6% → 91.2% | 2.5 MiB → 2.76 MiB |      40 | `malloc_hook`               | `libasyncProfiler.dylib` |
| +55.5% | +96.865 KiB |   6.4% → 8.8% |  175 KiB → 271 KiB | 31 → 26 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `BarrierSetC2::store_at` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| +12.2% | +351.882 KiB | 98.9% → 99.0% | 2.81 MiB → 3.16 MiB | 50 → 45 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `ModRefBarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------- | -------------- |
| +51.3% | +639.984 KiB | 43.3% → 58.4% | 1.22 MiB → 1.84 MiB | 26 → 25 | `G1BarrierSetC2::post_barrier`    | `libjvm.dylib` |
| -19.1% |  -288.07 KiB | 52.2% → 37.6% | 1.47 MiB → 1.19 MiB | 21 → 19 | `G1BarrierSetC2::pre_barrier`     | `libjvm.dylib` |
|    ~0% |        -32 B |   4.4% → 4.0% |             128 KiB |   3 → 1 | `BarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Callee                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| +40.0% | +320.023 KiB | 100.0% | 800 KiB → 1.09 MiB |  7 → 11 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `LibraryCallKit::load_klass_from_mirror_common` (`libjvm.dylib`)

|  Change |        Delta |              % |            Size | Samples | Callee                           | Location       |
| ------: | -----------: | -------------: | --------------: | ------: | -------------------------------- | -------------- |
|     new | +256.015 KiB |   0.0% → 80.0% |   0 B → 256 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| +100.0% |      +32 KiB | 100.0% → 20.0% | 32 KiB → 64 KiB |       1 | `GraphKit::null_check_oop`       | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_newArray` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Callee                                          | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `LibraryCallKit::load_klass_from_mirror_common` | `libjvm.dylib` |

##### `CountedLoopReserveKit::create_reserve` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Callee                                           | Location       |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------------ | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `PhaseIdealLoop::create_reserve_version_of_loop` | `libjvm.dylib` |

##### `CountedLoopReserveKit::CountedLoopReserveKit` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Callee                                  | Location       |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------------- | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `CountedLoopReserveKit::create_reserve` | `libjvm.dylib` |

##### `SuperWord::output` (`libjvm.dylib`)

| Change |    Delta |      % |              Size | Samples | Callee                                         | Location       |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------------------------- | -------------- |
| +63.6% | +224 KiB | 100.0% | 352 KiB → 576 KiB |       5 | `CountedLoopReserveKit::CountedLoopReserveKit` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     Change |       Delta |             % |              Size | Samples | Callee                                        | Location       |
| ---------: | ----------: | ------------: | ----------------: | ------: | --------------------------------------------- | -------------- |
|     +64.5% | +97.904 KiB | 99.9% → 72.2% | 152 KiB → 250 KiB | 29 → 30 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
| +122990.0% | +96.085 KiB |  0.1% → 27.8% |   80 B → 96.2 KiB |   1 → 6 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|  Change |       Delta |             % |                Size | Samples | Callee                                   | Location       |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------- | -------------- |
| +127.8% | +193.99 KiB | 78.3% → 89.3% |   152 KiB → 346 KiB | 30 → 36 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
|   -2.2% |      -940 B | 21.7% → 10.7% | 42.2 KiB → 41.3 KiB |   8 → 3 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | -------------------------------- | -------------- |
| +700.6% | +224.039 KiB | 12.5% → 61.5% | 32 KiB → 256 KiB |       1 | `GraphKit::uncommon_trap`        | `libjvm.dylib` |
| removed |  -64.015 KiB |  25.0% → 0.0% |     64 KiB → 0 B |   1 → 0 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
|  -50.0% |  -32.039 KiB |  25.0% → 7.7% |  64 KiB → 32 KiB |       1 | `Parse::sharpen_type_after_if`   | `libjvm.dylib` |
|  +33.3% |      +32 KiB | 37.5% → 30.8% | 96 KiB → 128 KiB |       2 | `GraphKit::add_parse_predicate`  | `libjvm.dylib` |

##### `LibraryCallKit::inline_unsafe_allocate` (`libjvm.dylib`)

| Change |        Delta |             % |          Size | Samples | Callee                                | Location       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | -------------- |
|    new | +128.031 KiB | 0.0% → 100.0% | 0 B → 128 KiB |   0 → 2 | `GraphKit::set_output_for_allocation` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee       | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------ | -------------- |
|  -8.1% | -118.753 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee                | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -8.1% | -118.753 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,212 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change |        Delta |            % |                Size |       Samples | Callee                                         | Location       |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------------------------- | -------------- |
|   -8.1% | -118.746 MiB |       100.0% | 1.43 GiB → 1.31 GiB | 8,818 → 8,216 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| removed |   -8.062 KiB | <0.1% → 0.0% |      8.06 KiB → 0 B |         1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|     new |   +8.015 KiB | 0.0% → <0.1% |      0 B → 8.02 KiB |         0 → 1 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee                                | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------------------- | -------------- |
|  -8.1% | -118.746 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------- | -------------- |
|   -8.1% | -117.828 MiB | 99.7% → 99.8% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  -22.9% | -908.183 KiB |   0.3% → 0.2% | 3.87 MiB → 2.99 MiB |       95 → 89 | `Compiler::compile_method`    | `libjvm.dylib` |
| removed |  -31.976 KiB |  <0.1% → 0.0% |        32 KiB → 0 B |         1 → 0 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|     new |        +21 B |  0.0% → <0.1% |          0 B → 21 B |         0 → 1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|   Change |        Delta |      % |                Size |       Samples | Callee                          | Location       |
| -------: | -----------: | -----: | ------------------: | ------------: | ------------------------------- | -------------- |
|    -8.1% | -118.746 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,819 → 8,217 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +1794.5% |  +38.414 KiB |  <0.1% | 2.14 KiB → 40.6 KiB |         2 → 6 | `WorkerThread::run`             | `libjvm.dylib` |
|   -18.9% |   -7.554 KiB |  <0.1% |   40 KiB → 32.4 KiB |             5 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee             | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee                | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------- | -------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee           | Location                  |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------- | ------------------------- |
|  -8.1% | -118.716 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,826 → 8,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee        | Location                 |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------- | ------------------------ |
|  -8.1% | -118.712 MiB | 100.0% | 1.43 GiB → 1.31 GiB | 8,931 → 8,330 | `malloc_hook` | `libasyncProfiler.dylib` |
|    ~0% |       +192 B |   0.1% |             914 KiB |         1 → 2 | `os::malloc`  | `libjvm.dylib`           |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  -7.5% |  -59.717 MiB | 54.5% → 54.9% |   795 MiB → 735 MiB | 4,726 → 4,426 | `Compile::Optimize`                      | `libjvm.dylib` |
|  -8.7% |  -54.797 MiB | 43.5% → 43.2% |   633 MiB → 579 MiB | 3,651 → 3,401 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| -11.8% |   -2.125 MiB |          1.2% | 17.9 MiB → 15.8 MiB |     244 → 207 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -41.9% | -832.062 KiB |          0.1% | 1.94 MiB → 1.13 MiB |       15 → 11 | `Compile::inline_string_calls`           | `libjvm.dylib` |
|  -6.0% | -512.109 KiB |          0.6% | 8.38 MiB → 7.88 MiB |       75 → 68 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |       Samples | Callee             | Location       |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------ | -------------- |
|  -8.1% | -117.828 MiB | 100.0% | 1.42 GiB → 1.31 GiB | 8,722 → 8,126 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
|  -7.6% |  -28.422 MiB | 47.3% → 47.2% |   376 MiB → 347 MiB | 2,269 → 2,130 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  -7.3% |  -27.905 MiB | 47.8% → 47.9% |   380 MiB → 352 MiB | 1,929 → 1,799 | `Compile::optimize_loops`              | `libjvm.dylib` |
| -20.2% |   -2.254 MiB |   1.4% → 1.2% | 11.2 MiB → 8.91 MiB |      115 → 94 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| -16.4% | -959.296 KiB |   0.7% → 0.6% | 5.71 MiB → 4.77 MiB |       98 → 83 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
| -12.1% | -743.617 KiB |   0.8% → 0.7% | 6.01 MiB → 5.28 MiB |      106 → 93 | `PhaseCCP::do_transform`               | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | -------------- |
|  -7.4% |  -55.484 MiB | 99.4% → 99.5% |   751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| -18.1% | -864.164 KiB |   0.6% → 0.5% | 4.66 MiB → 3.81 MiB |       41 → 33 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                                             | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|   -7.5% |  -49.312 MiB | 87.3% → 87.1% |   655 MiB → 606 MiB | 2,565 → 2,446 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  -18.7% |     -4.5 MiB |   3.2% → 2.8% |   24 MiB → 19.5 MiB |     374 → 314 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|   -6.4% | -800.421 KiB |          1.6% | 12.3 MiB → 11.5 MiB |     249 → 227 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  -56.2% |  -457.71 KiB |          0.1% |   814 KiB → 356 KiB |       22 → 10 | `PhaseIdealLoop::build_loop_tree`                                  | `libjvm.dylib` |
| removed | -256.031 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |         2 → 0 | `IdealLoopTree::beautify_loops`                                    | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -7.4% | -55.484 MiB | 100.0% | 751 MiB → 695 MiB | 4,157 → 3,896 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  -8.8% |  -46.237 MiB | 83.4% → 83.3% |   528 MiB → 482 MiB | 2,724 → 2,541 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -7.1% |   -6.569 MiB | 14.6% → 14.8% | 92.4 MiB → 85.8 MiB |     706 → 673 | `Matcher::match`                  | `libjvm.dylib` |
| -15.1% | -928.945 KiB |          0.9% |     6 MiB → 5.1 MiB |       96 → 83 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| -20.0% | -640.328 KiB |   0.5% → 0.4% |  3.13 MiB → 2.5 MiB |       58 → 48 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -12.5% | -401.062 KiB |          0.5% | 3.15 MiB → 2.75 MiB |       51 → 42 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -7.5% | -49.312 MiB | 100.0% | 655 MiB → 606 MiB | 2,565 → 2,446 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  -8.1% |  -32.867 MiB | 77.2% → 77.8% |   408 MiB → 375 MiB | 1,726 → 1,658 | `PhaseIFG::init`                         | `libjvm.dylib` |
| -10.1% |   -11.13 MiB | 20.8% → 20.5% |  110 MiB → 98.8 MiB |     833 → 753 | `PhaseLive::compute`                     | `libjvm.dylib` |
| -32.2% |    -2.28 MiB |   1.3% → 1.0% | 7.09 MiB → 4.81 MiB |      100 → 67 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
| -31.1% | -550.164 KiB |   0.3% → 0.2% | 1.73 MiB → 1.19 MiB |       27 → 19 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
| +69.6% | +512.093 KiB |   0.1% → 0.3% |  736 KiB → 1.22 MiB |       17 → 23 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -6.0% | -7.502 MiB | 100.0% | 126 MiB → 118 MiB | 1,726 → 1,597 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | -------------- |
| -18.5% | -4.438 MiB | 100.0% | 24 MiB → 19.6 MiB | 374 → 315 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ---------------------------------- | -------------- |
| -18.5% |   -2.625 MiB | 98.3% → 98.9% | 14.2 MiB → 11.6 MiB | 177 → 165 | `ParseGenerator::generate`         | `libjvm.dylib` |
| -21.1% |   -1.125 MiB | 36.9% → 36.0% | 5.34 MiB → 4.22 MiB |   57 → 50 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| -57.7% | -480.062 KiB |   5.6% → 2.9% |   832 KiB → 352 KiB |     7 → 3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
| +71.4% | +160.062 KiB |   1.5% → 3.2% |   224 KiB → 384 KiB |     3 → 7 | `GraphKit::null_check_common`      | `libjvm.dylib` |
| -66.7% | -128.015 KiB |   1.3% → 0.5% |    192 KiB → 64 KiB |     3 → 2 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                             | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------- | -------------- |
| -19.0% |    -2.75 MiB | 84.3% → 78.1% | 14.5 MiB → 11.7 MiB | 183 → 168 | `PredictedCallGenerator::generate`                 | `libjvm.dylib` |
| -10.0% |   -1.375 MiB | 80.1% → 82.5% | 13.8 MiB → 12.4 MiB | 168 → 150 | `ParseGenerator::generate`                         | `libjvm.dylib` |
|    new | +256.031 KiB |   0.0% → 1.7% |       0 B → 256 KiB |     0 → 2 | `GraphKit::record_profiled_return_for_speculation` | `libjvm.dylib` |
| -72.7% | -256.015 KiB |   2.0% → 0.6% |    352 KiB → 96 KiB |     3 → 2 | `LateInlineVirtualCallGenerator::generate`         | `libjvm.dylib` |
|    new | +160.046 KiB |   0.0% → 1.0% |       0 B → 160 KiB |     0 → 3 | `GraphKit::cast_not_null`                          | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                          | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------- | -------------- |
|  -10.8% |   -1.969 MiB | 99.0% → 99.6% | 18.2 MiB → 16.2 MiB | 245 → 217 | `Parse::do_one_block`           | `libjvm.dylib` |
|  -62.5% | -160.039 KiB |   1.4% → 0.6% |    256 KiB → 96 KiB |         3 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
| removed |  -64.015 KiB |   0.3% → 0.0% |        64 KiB → 0 B |     1 → 0 | `GraphKit::clone_map`           | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 0.2% |        0 B → 32 KiB |     0 → 1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |
|  +12.5% |  +31.984 KiB |   1.4% → 1.7% |   256 KiB → 288 KiB |     6 → 5 | `Parse::merge_common`           | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |        Delta |            % |                Size |   Samples | Callee                    | Location       |
| -----: | -----------: | -----------: | ------------------: | --------: | ------------------------- | -------------- |
| -11.4% |   -2.094 MiB |       100.0% | 18.4 MiB → 16.3 MiB | 247 → 218 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| -36.0% | -864.171 KiB | 12.8% → 9.2% |  2.34 MiB → 1.5 MiB |   22 → 16 | `Parse::build_exits`      | `libjvm.dylib` |
| -28.6% | -192.007 KiB |  3.6% → 2.9% |   672 KiB → 480 KiB |     6 → 8 | `GraphKit::set_map_clone` | `libjvm.dylib` |
| -50.0% |     -128 KiB |  1.4% → 0.8% |   256 KiB → 128 KiB |         1 | `Parse::merge_common`     | `libjvm.dylib` |
| -50.0% |  -63.984 KiB |  0.7% → 0.4% |    128 KiB → 64 KiB |     1 → 2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
| -11.4% | -2.094 MiB | 100.0% | 18.4 MiB → 16.3 MiB | 247 → 218 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                      | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------- | -------------- |
|  -12.6% |   -2.157 MiB | 94.3% → 92.5% |   17.2 MiB → 15 MiB | 225 → 203 | `Parse::do_call`            | `libjvm.dylib` |
| +103.7% | +896.039 KiB |  4.6% → 10.6% |  864 KiB → 1.72 MiB |   14 → 24 | `Parse::do_if`              | `libjvm.dylib` |
|  -78.3% | -576.039 KiB |   4.0% → 1.0% |   736 KiB → 160 KiB |     8 → 3 | `Parse::array_load`         | `libjvm.dylib` |
|  +17.0% | +575.921 KiB | 18.2% → 23.9% | 3.31 MiB → 3.88 MiB |        58 | `Parse::do_field_access`    | `libjvm.dylib` |
|  -76.5% | -416.039 KiB |   2.9% → 0.8% |   544 KiB → 128 KiB |     9 → 4 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | -------------- |
| -43.9% | -1.125 MiB | 100.0% | 2.56 MiB → 1.44 MiB | 47 → 30 | `Arena::grow` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------- |
| -22.9% | -908.183 KiB | 100.0% | 3.87 MiB → 2.99 MiB | 95 → 89 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
|  -81.8% | -576.109 KiB |  29.3% → 8.3% | 704 KiB → 128 KiB |   6 → 4 | `GraphKit::clone_map`      | `libjvm.dylib` |
|  -87.5% | -448.031 KiB |  21.3% → 4.2% |  512 KiB → 64 KiB |   3 → 1 | `GraphKit::set_all_memory` | `libjvm.dylib` |
|  +44.4% | +128.031 KiB | 12.0% → 27.1% | 288 KiB → 416 KiB |   4 → 6 | `Node::Node`               | `libjvm.dylib` |
|   +7.4% |  +63.953 KiB | 36.0% → 60.4% | 864 KiB → 928 KiB |   8 → 5 | `Type_Array::grow`         | `libjvm.dylib` |
| removed |  -32.015 KiB |   1.3% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node_Array::grow`         | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |            % |                Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +225.0% | +576.062 KiB | <0.1% → 0.1% |   256 KiB → 832 KiB |   2 → 6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::register_new_node` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_pre` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +51.4% | +572.562 KiB |         0.1% | 1.09 MiB → 1.65 MiB | 16 → 26 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `ConnectionGraph::ConnectionGraph` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +35.4% | +544.156 KiB |  0.1% → 0.2% |  1.5 MiB → 2.03 MiB | 21 → 31 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +37.2% | +512.078 KiB |         0.1% | 1.34 MiB → 1.84 MiB | 11 → 16 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +200.0% | +512.062 KiB | <0.1% → 0.1% |   256 KiB → 768 KiB |   2 → 6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::is_counted_loop` ← `IdealLoopTree::counted_loop` ← `IdealLoopTree::counted_loop` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +699.9% | +448.046 KiB |        <0.1% |    64 KiB → 512 KiB |   1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::fix_body_edges` ← `PhaseIdealLoop::clone_loop` ← `PhaseIdealLoop::insert_post_loop` ← `PhaseIdealLoop::insert_pre_post_loops` ← `IdealLoopTree::iteration_split_impl` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +649.8% | +416.078 KiB |        <0.1% |    64 KiB → 480 KiB |   2 → 7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +216.6% | +320.148 KiB |        <0.1% |   148 KiB → 468 KiB |  4 → 12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new | +320.046 KiB | 0.0% → <0.1% |       0 B → 320 KiB |   0 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::register_new_node_with_optimizer` ← `PhaseMacroExpand::expand_allocate_common` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +31.0% | +288.109 KiB |         0.1% |  928 KiB → 1.19 MiB | 14 → 21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +288.062 KiB | 0.0% → <0.1% |       0 B → 288 KiB |   0 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::register_new_node_with_optimizer` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +899.6% | +288.015 KiB |        <0.1% |    32 KiB → 320 KiB |   1 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +400.0% | +256.046 KiB |        <0.1% |    64 KiB → 320 KiB |   1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Compile::grow_node_notes` ← `Compile::copy_node_notes_to` ← `Node::clone` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +256.031 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `IdealKit::delay_transform` ← `IdealKit::load` ← `G1BarrierSetC2::pre_barrier` ← `ModRefBarrierSetC2::store_at_resolved` ← `BarrierSetC2::store_at` ← `GraphKit::access_store_at` ← `Parse::do_put_xxx` ← `Parse::do_field_access` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +256.031 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::record_profile_for_speculation` ← `GraphKit::record_profiled_return_for_speculation` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `Parse::do_exits` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                            |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `Parse::return_current` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                            |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::register_new_node_with_optimizer` ← `PhaseMacroExpand::expand_unlock_node` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `Parse::build_exits` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                         |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `Parse::do_one_bytecode` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

| Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                    |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -8.1% |  -32.867 MiB |         27.8% |   408 MiB → 375 MiB | 1,726 → 1,658 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                 |
|  -8.1% |   -26.74 MiB | 22.6% → 22.7% |   332 MiB → 305 MiB | 1,187 → 1,129 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                      |
|  -7.0% |  -22.571 MiB | 22.1% → 22.3% |   323 MiB → 301 MiB | 1,378 → 1,317 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                  |
| -10.0% |  -11.005 MiB |   7.5% → 7.3% |  110 MiB → 98.7 MiB |     827 → 751 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                             |
|  -9.2% |     -3.8 MiB |          2.8% | 41.4 MiB → 37.6 MiB |     216 → 200 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                  |
| -25.3% |   -2.844 MiB |   0.8% → 0.6% | 11.2 MiB → 8.38 MiB |     189 → 155 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                            |
| -23.1% |   -2.187 MiB |   0.6% → 0.5% | 9.47 MiB → 7.28 MiB |       93 → 72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                              |
| -12.9% |   -1.656 MiB |   0.9% → 0.8% | 12.8 MiB → 11.2 MiB |     185 → 159 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                |
|  -5.3% |   -1.392 MiB |   1.8% → 1.9% |   26.4 MiB → 25 MiB |     198 → 201 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| -19.4% |   -1.062 MiB |   0.4% → 0.3% | 5.47 MiB → 4.41 MiB |       63 → 59 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                         |
| -69.0% | -928.062 KiB |  0.1% → <0.1% |  1.31 MiB → 416 KiB |         9 → 5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_USE` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                        |
| -31.6% |  -768.25 KiB |   0.2% → 0.1% | 2.38 MiB → 1.63 MiB |       44 → 28 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize`                                                                                                                                                                                                           |
| -32.4% | -768.156 KiB |   0.2% → 0.1% | 2.31 MiB → 1.56 MiB |       39 → 29 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::remove_speculative_types` ← `Compile::Optimize`                                                                                                                                                                                         |
| -21.3% |  -736.14 KiB |          0.2% | 3.38 MiB → 2.66 MiB |       27 → 18 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                 |
| -59.0% |  -735.46 KiB |  0.1% → <0.1% |  1.22 MiB → 512 KiB |       39 → 16 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                            |
| -11.1% | -672.171 KiB |          0.4% | 5.94 MiB → 5.28 MiB |      104 → 93 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                            |
| -19.8% | -608.179 KiB |          0.2% |    3 MiB → 2.41 MiB |       52 → 38 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
| -38.3% | -576.062 KiB |          0.1% |  1.47 MiB → 928 KiB |        11 → 7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::inline_string_calls`                                                                                                                                      |
| -31.1% | -550.164 KiB |          0.1% | 1.73 MiB → 1.19 MiB |       27 → 19 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseRegAlloc::alloc_node_regs` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                 |
|  -6.0% | -512.109 KiB |          0.6% | 8.38 MiB → 7.88 MiB |       75 → 68 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                       |
